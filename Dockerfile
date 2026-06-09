# Step 1: Base image
FROM node:18-alpine AS base
WORKDIR /app

# Step 2: Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Step 3: Install dependencies
RUN yarn install

# Stage 2: Development (Next.js development server)
FROM base AS development
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["yarn", "dev"]

# Stage 3: Build (Next.js build)
FROM base AS builder
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
COPY . .
RUN yarn build

# Stage 4: Production runner
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Copy package and node_modules for runner
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/messages ./messages

ENV PORT=3000
EXPOSE 3000
CMD ["yarn", "start"]

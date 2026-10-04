import { ContentJson } from "../content";
import { resolveUploadSrc } from "@/lib/api/client";

export class Department {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description?: string,
    public readonly icon?: string,
    public readonly image?: string,
    public readonly displayOrder: number = 1
  ) {}

  static fromContentJson(content: ContentJson): Department | null {
    if (!content.contentMetasJson) return null;
    const meta = content.contentMetasJson;
    const name = meta.name || "";
    if (!name) return null;

    const description = meta.description || "";
    const icon = meta.icon || "";
    const image = resolveUploadSrc(meta.image, "") || "";
    const displayOrder = Number(meta.displayOrder || content.displayOrder || 1);

    return new Department(
      content.id,
      name,
      description,
      icon,
      image,
      isNaN(displayOrder) ? 1 : displayOrder
    );
  }

  toPlain() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      icon: this.icon,
      image: this.image,
      displayOrder: this.displayOrder,
    };
  }
}

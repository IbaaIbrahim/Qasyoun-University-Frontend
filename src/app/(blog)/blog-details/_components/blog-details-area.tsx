import Image from 'next/image';
import { IBlogDT } from '@/types/blog-d-t';
import BlogReplyForm from '@/components/form/blog-reply-form';
import BlogDetailsNavigation from '@/components/blog/details/blog-details-navigation';
import BlogSidebarArea from '@/components/blog/sidebar/blog-sidebar-area';
import { BlogQuoteItemOne } from '@/components/blog/single/blog-quote-item';
import BlogDetailsComments from '@/components/blog/details/blog-details-comments';
import details_bg from '@/assets/img/blog/deatils/blog-details-bg.jpg';
import details_thumb from '@/assets/img/blog/deatils/blog-details-thumb-1.jpg';
import BlogDetailsAuthor from '@/components/blog/details/blog-details-author';

type IProps = {
	blog: IBlogDT
}

export default function BlogDetailsArea({ blog }: IProps) {
	return (
		<section className="tp-blog-details-p p-relative pt-80 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tp-blog-details-wrap">
							<div className="tp-blog-stories-tag-wrap">
								<a href="#">Education</a>
							</div>
							<h3 className="tp-blog-details-title">{blog.title}</h3>
							<div className="tp-blog-details-user d-flex justify-content-between">
								<div className="tp-blog-details-user-box">
									<span>
										{blog.author_img && (
											<Image src={blog.author_img} alt={blog.author} width={46} height={46} />
										)} {blog.author}
									</span>
									<span>{blog.date}</span>
									<span>2 Comments</span>
								</div>
								<div className="tp-blog-details-user-social">
									<div className="tp-postbox-details-social text-end">
										<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
										<a href="#"><i className="fa-brands fa-twitter"></i></a>
										<a href="#"><i className="fa-solid fa-link"></i></a>
									</div>
								</div>
							</div>
						</div>

						<div className="tp-blog-details-thumb mb-80">
							<Image src={details_bg} alt="details-bg" style={{height:"auto"}} />
						</div>
					</div>

					<div className="col-lg-8">
						<div className="tp-postbox-wrapper">
							<div className="tp-postbox-details-text">
								<p className="tp-dropcap text-1">Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.</p>
								<p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi consequat. Fusce sodales augue a accumsan. </p>

								<p className="text-2">I do not know why she surrendered - exhaustion, probably - but one afternoon in 1980 I was allowed. It was the remake of Jens Lyn with Max von Sydow, you could see the strings in the spaceships when they flew, and it was wonderful . Five friends in the cinema darkness. We only had money for four tickets, so we took turns sitting on each other laps</p>
							</div>

							<div className="tp-postbox-details-thumb pb-60">
								<Image src={details_thumb} alt="details-thumb" style={{height:"auto"}} />
							</div>

							<div className="tp-postbox-details-text pb-25">
								<p>You want to succeed, surround yourself with the right kind of people who will support and encourage you all the way. Be with people who have utmost conviction and patience. The battle is never lost until you’ve abandon your vision. But what if you’re really exhausted physically, mentally, and most of all emotionally? Here are some sources of motivation to prompt.</p>
							</div>

							<div className="tp-postbox-details-text pb-35">
								<h4 className="tp-postbox-details-title">Contemporary art daily</h4>
								<p>Successful people do not see failures as failures. They see them as important learning lessons. Lessons that are capable of giving them insights to prevent such mistakes from happening again. By adopting this mindset of turning each failure into a learning lesson or opportunity.</p>
							</div>

							{/* Blog Quote Item */}
							<BlogQuoteItemOne blog={blog} />
							{/* Blog Quote Item */}

							<div className="tp-postbox-details-text pb-35">
								<div className="tp-postbox-details-list">
									<h4 className="tp-postbox-details-title">Procedere</h4>
									<p>Successful people do not see failures as failures. They see them as important learning lessons. Lessons that are capable of giving them insights to prevent such mistakes from happening again. By adopting this mindset of turning each failure into a learning lesson or opportunity.</p>
									<ul>
										<li>Diversity investigation for royal been.</li>
										<li>Create a structure where participants will add their information.</li>
										<li>Efforts without a focus.</li>
										<li>Many contradicting opinions a vision document.</li>
										<li>A deliverable for workshop participants.</li>
									</ul>
								</div>
							</div>

							<div className="tp-postbox-details-share mb-50">
								<div className="row align-items-center">
									<div className="col-md-8">
										<div className="tagcloud tp-postbox-details-tag">
											<a href="#">Education</a>
											<a href="#">Life Style</a>
											<a href="#">React</a>
											<a href="#">Application</a>
										</div>
									</div>
									<div className="col-md-4">
										<div className="tp-postbox-details-social text-start text-md-end">
											<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
											<a href="#"><i className="fa-brands fa-twitter"></i></a>
											<a href="#"><i className="fa-solid fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							{/* blog details navigation */}
							<BlogDetailsNavigation />
							{/* blog details navigation */}

							{/* details author */}
							<BlogDetailsAuthor author={blog.author} />
							{/* details author */}

							<div className="tp-postbox-comment mb-100">
								<h3 className="tp-postbox-comment-title">2 Comments</h3>
								{/* comments area start */}
								<BlogDetailsComments/>
								{/* comments area end */}
							</div>

							<div className="tp-postbox-comment-from">
								<h3 className="tp-postbox-comment-title">Leave a Reply</h3>
								<p className="tp-postbox-comment-p">
									Your email address will not be published. Required fields are marked *
								</p>

								{/* form start */}
								<BlogReplyForm />
								{/* form end */}
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						{/* blog sidebar */}
						<BlogSidebarArea />
						{/* blog sidebar */}
					</div>
				</div>
			</div>
		</section>
	)
}

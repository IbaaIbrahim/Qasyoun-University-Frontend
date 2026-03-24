import Link from 'next/link';
import { SearchSvgTwo } from '@/components/svg';
import { blog_stories_data } from '@/data/blog-data';

export default function BlogSidebarArea() {
   return (
      <div className="tp-sidebar-wrapper pl-55">
         <div className="tp-sidebar-widgets mb-50">
            <div className="tp-sidebar-content">
               <div className="tp-sidebar-search p-relative">
                  <form action="#">
                     <input type="text" placeholder="Search..." />
                     <button className="tp-sidebar-search-btn" type="submit">
                        <span>
                           <SearchSvgTwo/>
                        </span>
                     </button>
                  </form>
               </div>
            </div>
         </div>
         <div className="tp-sidebar-widget mb-50">
            <div className="tp-sidebar-content">
               <h5 className="tp-sidebar-widget-title">Categories</h5>
               <ul>
                  <li><Link href="/blog-standard">Articles <span>(8)</span></Link></li>
                  <li><Link href="/blog-standard">Business <span>(4)</span></Link></li>
                  <li><Link href="/blog-standard">Family & Divorce <span>(2)</span></Link></li>
                  <li><Link href="/blog-standard">Web Design <span> (6) </span></Link></li>
                  <li><Link href="/blog-standard">Software <span>(3)</span></Link></li>
                  <li><Link href="/blog-standard">Video <span>(8)</span></Link></li>
               </ul>
            </div>
         </div>
         <div className="tp-sidebar-widget mb-50">
            <h5 className="tp-sidebar-widget-title">Recent Posts</h5>
            {/* recent post */}
            {blog_stories_data.slice(0, 3).map((blog,i) => (
               <div key={blog.id} className="tp-recent-post-content">
               <span className={`tp-recent-post-span ${i === 1 ? 'gray' : i === 2 ? 'yellow' : ''}`}>
                  {blog.tag}
               </span>
               <h5 className="tp-recent-post-title">
                  <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
               </h5>
               <div className="tp-recent-post-tag">
                  <span>{blog.date}</span>
                  <span>Minute</span>
               </div>
            </div>
            ))}
            {/* recent post */}
         </div>
         <div className="tp-sidebar-widget mb-50">
            <div className="tp-sidebar-content">
               <h5 className="tp-sidebar-widget-title">Tag</h5>
               <div className="tagcloud">
                  <a href="#">News</a>
                  <a href="#">Counseling</a>
                  <a href="#">Career</a>
                  <a href="#">Software</a>
                  <a href="#">Development</a>
                  <a href="#">Merket</a>
                  <a href="#">Life</a>
                  <a href="#">Research</a>
                  <a href="#">Research</a>
                  <a href="#">UI Design</a>
                  <a href="#">Team</a>
               </div>
            </div>
         </div>
      </div>
   )
}

'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DashboardSvg } from "@/components/svg";
import { EnrolledCourseSvg, LogoutSvg, OrderHistorySvg, ProfileSvg, QuestionAnswerSvg, QuizAttemptsSvg, ReviewSvg, SettingSvg, WishlistSvg } from "@/components/svg/dashboard-icons";
import user_banner from "@/assets/img/dashboard/icon/menu/menu-shape.png";

// dashboard menu data
const dashboardMenuData = [
	{
		section: "Welcome", items: [
			{ title: "Dashboard", icon: <DashboardSvg />, href: "/dashboard/student-dashboard"},
			{ title: "My Profile", icon: <ProfileSvg />, href: "/dashboard/student-profile" },
			{ title: "Enrolled Courses", icon: <EnrolledCourseSvg />, href: "/dashboard/student-enroll-course" },
			{ title: "Wishlist", icon: <WishlistSvg />, href: "/dashboard/student-wishlist" },
			{ title: "Reviews", icon: <ReviewSvg />, href: "/dashboard/student-reviews" },
			{ title: "My Quiz Attempts", icon: <QuizAttemptsSvg />, href: "/dashboard/student-my-quiz" },
			{ title: "Order History", icon: <OrderHistorySvg />, href: "/dashboard/student-order" },
			{ title: "Question & Answer", icon: <QuestionAnswerSvg />, href: "/dashboard/student-question-answer" },
		]
	},
	{
		section: "User", items: [
			{ title: "Settings", icon: <SettingSvg />, href: "/dashboard/student-setting-profile" },
			{ title: "Logout", icon: <LogoutSvg />, href: "/login" }
		]
	}
];

export default function StudentDashboardSidebar() {
	const pathname = usePathname();
	return (
		<div className="tpd-user-sidebar">
			<div className="tp-user-wrap">
				<div className="tp-user-menu">
					<nav>
						<ul>
							{dashboardMenuData.map((menuSection, i) => (
								<React.Fragment key={i}>
									<li className={`tp-user-menu-title ${i!==0?"space-gap":""}`}>
										{menuSection.section}
									</li>
									<ul>
										{menuSection.items.map((item, index) => (
											<li key={index}>
												<Link className={item.href === pathname ? "active" : ""} href={item.href}>
													<span>{item.icon}</span>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</React.Fragment>
							))}
						</ul>
					</nav>
				</div>
				<div className="tp-user-banner d-flex align-items-center">
					<div className="tp-user-banner-text">
						<h4 className="tp-user-banner-title">Online Education</h4>
						<div className="tp-user-banner-btn">
							<a className="tp-btn-course" href="instructor-my-course">View Course</a>
						</div>
					</div>
					<div className="tp-user-banner-shape">
						<Image src={user_banner} alt="user-banner" />
					</div>
				</div>
			</div>
		</div>
	)
}

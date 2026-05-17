"use client";

import Image from 'next/image';
import { LabDto } from '@/lib/classes/lab';
import { resolveUploadSrc } from '@/lib/api/client';
import Slider from '@/lib/classes/slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import SocialMedia from '@/lib/classes/social-media';

type IProps = {
    lab: LabDto;
    locale: string;
    slides: Slider[];
    socials?: SocialMedia | null;
}

export default function LabDetailsArea({ lab, locale, slides, socials }: IProps) {
    const t = useTranslations("Laboratories");
    const name = locale === 'ar' ? lab.name_AR || lab.name : lab.name;
    const content = locale === 'ar' ? lab.content_AR || lab.content : lab.content;
    const mainImage = resolveUploadSrc(lab.picture?.url, '');

    const handleCopyLink = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            alert(locale === 'ar' ? 'تم نسخ الرابط بنجاح!' : 'Link copied successfully!');
        }
    };

    const facebook = socials?.facebook || (!socials ? "https://www.facebook.com" : "");
    const twitter = socials?.twitter || (!socials ? "https://www.twitter.com" : "");
    const linkedin = socials?.linkedin || "";
    const youtube = socials?.youtube || "";
    const instagram = socials?.instagram || "";

    const socialData = [
        {
            id: 1,
            href: facebook,
            iconClass: "fa-brands fa-facebook-f",
            color: "#1877f2",
        },
        {
            id: 2,
            href: twitter,
            iconClass: "fa-brands fa-twitter",
            color: "#1da1f2",
        },
        {
            id: 3,
            href: linkedin,
            iconClass: "fa-brands fa-linkedin-in",
            color: "#0a66c2",
        },
        {
            id: 4,
            href: youtube,
            iconClass: "fa-brands fa-youtube",
            color: "#ff0000",
        },
        {
            id: 5,
            href: instagram,
            iconClass: "fa-brands fa-instagram",
            color: "#c13584",
        },
    ];

    const activeSocials = socialData.filter(
        (item) =>
            item.href &&
            item.href.trim() !== "" &&
            item.href.trim() !== "#" &&
            item.href.trim() !== "null" &&
            item.href.trim() !== "undefined"
    );

    return (
        <section className="tp-blog-details-p p-relative pt-60 pb-120 bg-light-soft">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Main Image at top with premium shadow and animation */}
                        {mainImage && (
                            <div className="tp-blog-details-thumb mb-50 text-center wow fadeInUp" data-wow-delay=".2s">
                                <Image
                                    src={mainImage}
                                    alt={name}
                                    width={1200}
                                    height={600}
                                    style={{
                                        height: "auto",
                                        borderRadius: '16px',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                    priority
                                    unoptimized
                                />
                            </div>
                        )}

                        <div className="tp-blog-details-wrap mb-40 wow fadeInUp" data-wow-delay=".3s">
                            <h3 className="tp-blog-details-title" style={{
                                fontSize: '2.4rem',
                                fontWeight: 800,
                                color: '#1c2b36',
                                letterSpacing: '-0.5px',
                                marginBottom: '20px'
                            }}>
                                {name}
                            </h3>
                            <div className="title-line" style={{ width: '80px', height: '4px', backgroundColor: '#42023e', borderRadius: '2px' }}></div>
                        </div>

                        <div className="tp-postbox-wrapper mb-80 wow fadeInUp" data-wow-delay=".4s">
                            <div className="tp-postbox-details-text shadow-sm bg-white p-4 p-md-5" style={{
                                borderRadius: '20px',
                                fontSize: '1.15rem',
                                lineHeight: '1.9',
                                color: '#444',
                                border: '1px solid rgba(0,0,0,0.03)'
                            }}>
                                {content && (
                                    <div
                                        className="lab-content-wrap"
                                        dangerouslySetInnerHTML={{ __html: content }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Gallery at bottom with customized Swiper */}
                        {slides.length > 0 && (
                            <div className="lab-gallery-wrap pt-60 border-top wow fadeInUp" data-wow-delay=".5s">
                                <h4 className="mb-30" style={{ fontWeight: 700, color: '#333' }}>
                                    {t("gallery")}
                                </h4>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={25}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    style={{
                                        '--swiper-navigation-color': '#42023e',
                                        '--swiper-pagination-color': '#42023e',
                                        '--swiper-navigation-size': '24px',
                                    } as React.CSSProperties}
                                    breakpoints={{
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    className="lab-gallery-slider pb-50"
                                >
                                    {slides.map((slide, idx) => (
                                        <SwiperSlide key={slide.id || idx}>
                                            <div className="gallery-item-wrapper" style={{
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <Image
                                                    src={slide.bgImg || ''}
                                                    alt={`Gallery ${idx}`}
                                                    width={400}
                                                    height={300}
                                                    style={{ objectFit: 'cover', width: '100%', height: '240px' }}
                                                    unoptimized
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        {/* Share / Print Buttons */}
                        <div className="tp-postbox-details-share mt-30 d-flex flex-wrap justify-content-between align-items-center border-top pt-30 wow fadeInUp" data-wow-delay=".6s">
                            <div className="print-btn mb-10">
                                <button
                                    onClick={() => window.print()}
                                    className="btn d-inline-flex align-items-center px-4 py-2"
                                    style={{
                                        borderRadius: '50px',
                                        backgroundColor: '#f8f9fa',
                                        color: '#666',
                                        fontWeight: 600,
                                        border: '1px solid #eee',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <i className="fa-solid fa-print me-2"></i> {t("printReport")}
                                </button>
                            </div>
                            <div className="tp-postbox-details-social text-end mb-10">
                                <span className="me-3 text-muted d-none d-sm-inline-block" style={{ fontSize: '0.9rem' }}>
                                    {t("share")}
                                </span>
                                {activeSocials.map((item) => (
                                    <a 
                                        key={item.id} 
                                        href={item.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            display: 'inline-flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            borderRadius: '50%', 
                                            backgroundColor: '#f0f2f5', 
                                            margin: '0 5px', 
                                            color: item.color 
                                        }}
                                    >
                                        <i className={item.iconClass}></i>
                                    </a>
                                ))}
                                <a 
                                    href="#" 
                                    onClick={handleCopyLink}
                                    style={{ 
                                        width: '40px', 
                                        height: '40px', 
                                        display: 'inline-flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#f0f2f5', 
                                        margin: '0 5px', 
                                        color: '#666' 
                                    }}
                                >
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

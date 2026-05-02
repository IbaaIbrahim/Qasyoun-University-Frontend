import Image from 'next/image';
import { RightArrow, ShapeLine } from '../svg';

// images
import thumb_1 from '@/assets/img/about/about-thumb-1.jpg';
import thumb_2 from '@/assets/img/about/about-thumb-2.jpg';
import shape_1 from '@/assets/img/about/about-shape-1.jpg';
import shape_2 from '@/assets/img/about/about-shape-2.jpg';
import icon_1 from '@/assets/img/icon/about/about-icon-1.svg';
import icon_2 from '@/assets/img/icon/about/about-icon-2.svg';
import { CSSProperties } from 'react';
import CounterItem from '../counter/counter-item';
import Link from 'next/link';
import AboutHome from '@/lib/classes/home/about';
import { useTranslations } from 'next-intl';

const imgStyle: CSSProperties = {
    height: 'auto'
}

export default function AboutOne({ data }: { data?: AboutHome }) {
    const t = useTranslations('AboutOne');
    const about_lists = [
        {
            id: 1,
            icon: icon_1,
            title: data?.concept1Title || t('defaultConcept1Title'),
            subtitle: data?.concept1Text || t('defaultConcept1Text')
        },
        {
            id: 2,
            icon: icon_2,
            title: data?.concept2Title || t('defaultConcept2Title'),
            subtitle: data?.concept2Text || t('defaultConcept2Text')
        }
    ];

    return (
        <section className="about-area tp-about-bg grey-bg pt-105">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-about-wrap mb-60 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="tp-about-thumb-wrapper">
                                <div className="tp-about-thumb-1">
                                    <Image src={data?.image1 || thumb_1} alt="about-thumb" style={imgStyle} width={400} height={500} />
                                </div>
                                <div className="tp-about-thumb-2">
                                    <Image src={data?.image2 || thumb_2} alt="about-thumb" style={imgStyle} width={400} height={500} />
                                </div>
                            </div>
                            <div className="tp-about-shape">
                                <div className="tp-about-shape-1">
                                    <Image src={shape_1} alt="shape" />
                                </div>
                                <div className="tp-about-shape-2">
                                    <Image src={shape_2} alt="shape" />
                                </div>
                            </div>
                            <div className="tp-about-exprience">
                                <div className="tp-about-exprience-text d-flex">
                                    <h3 className="tp-about-exprience-count">
                                        <CounterItem min={0} max={Number(data?.yearsOfExperience) || 27} />
                                    </h3>
                                    <p dangerouslySetInnerHTML={{ __html: t('yearsExperience') }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-about-wrapper mb-60 wow fadeInRight" data-wow-delay=".3s">
                            <div className="tp-section mb-40">
                                <h5 className="tp-section-subtitle">{t('titleLead')}</h5>
                                <h3 className="tp-section-title mb-30">{t('titleMain')} <br /> {t('titleMain2')}
                                    <span> {t('titleAccent')} <ShapeLine /> </span>
                                </h3>
                                <p dangerouslySetInnerHTML={{ __html: data?.text || t('defaultText') }} />
                            </div>
                            <div className="tp-about-list">
                                {about_lists.map((list) => (
                                    <div key={list.id} className="tp-about-list-item d-flex align-items-center mb-35">
                                        <div className="tp-about-list-icon">
                                            <span>
                                                <Image src={list.icon} alt="about-icon" />
                                            </span>
                                        </div>
                                        <div className="tp-about-list-content">
                                            <h5 className="tp-about-list-title">{list.title}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: list.subtitle }}></p>
                                        </div>
                                    </div>
                                ))}
                                <div className="tp-about-btn pt-10">
                                    <Link className="tp-btn tp-btn-sm" href="#">{t('seeMore')}
                                        <span>
                                            <RightArrow />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


'use client'
import errorImg from '../../public/assets/img/error/bug_fix.jpg';
import { useEffect } from "react";
import Image from 'next/image';

//global boundary error
export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
    }, [error]);
    return (
        <div className="tp-error-area pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="tp-error-wrapper text-center">
                            <div className="tp-error-thumb mb-50">
                                <Image width={500} height={500} src={errorImg} alt="error-img" />
                            </div>
                            <h1 className="title">Something went wrong</h1>
                             <p className="text">
                                    {error?.message}
                                </p>
                            <div className="tp-error-content">
                                <button className="tp-btn-inner" onClick={() => reset()}>Try Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
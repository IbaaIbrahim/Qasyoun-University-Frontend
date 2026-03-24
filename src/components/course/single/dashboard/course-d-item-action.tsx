'use client';
import { useState } from "react";
import { DeleteSvg, DotsTwoSvg, DraftSvg, DuplicateSvg } from "@/components/svg";
import useClickOutside from "@/hooks/use-click-outside";


export default function CourseDashboardItemAction({courseId}:{courseId:number}) {
    const [openActionId, setOpenActionId] = useState<number | null>(null);
    const actionButtonRef = useClickOutside(setOpenActionId);

    function toggleAction(id: number) {
        setOpenActionId(null);
        if (openActionId === id) {
           setOpenActionId(null);
        } else {
           setOpenActionId(id);
        }
     }

    return (
        <div ref={actionButtonRef} className={`tpd-action-inexact-btn ${openActionId === courseId ? 'active' : ''}`}>
            <button className="click" onClick={() => toggleAction(courseId)}>
                <DotsTwoSvg />
            </button>
            <div className="tpd-action-click-tooltip">
                <button>
                    <span>
                        <DuplicateSvg />
                    </span>
                    Duplicate
                </button>
                <button>
                    <span>
                        <DraftSvg />
                    </span>
                    Move to Draft
                </button>
                <button>
                    <span>
                        <DeleteSvg />
                    </span>
                    Delete
                </button>
            </div>
        </div>
    )
}


import { Suspense } from "react"
import "../globals.css"

import BlogListSkeleton from "@/components/Skelaton";
import StyledComponentsRegistry from "@/lib/register";

export default function BlogLayout(
    {children}:{children: React.ReactNode}
){
    return(
        <div className="flex justify-center items-center">
            <StyledComponentsRegistry>
                <Suspense fallback={<BlogListSkeleton/>}>
                    {children}
                </Suspense>
            </StyledComponentsRegistry>
        </div>
    )
}
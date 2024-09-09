import { useState } from "react";
import { myProjects } from "../constants";


export default function Projects() {

    const [currentProject,setCurrentProject] = useState(myProjects[0]);

    return (
        <section className="c-space my-20">
            <p className="head-text">
                My Work
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-300">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 rounded-xl object-cover"/>

                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit  rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                    </div>
                    <div className="flex flex-col gap-5 text-white-500 my-10">
                        <p className="text-whtie text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className=" animatedText">{currentProject.desc}</p>
                        <p className=" animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {
                                currentProject.tags.map((tag,idx) => (
                                    <div className="tech-logo" key={idx}>
                                        <img src={tag.path} alt={tag.name}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


// 2 numbers ut through the keyboard into two locations c and d . write a prograrm to  interchange the content of c and d
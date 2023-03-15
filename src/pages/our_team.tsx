
import Head from "next/head";
import axios from "axios";
import React from "react";
import OurTeamCard from "../components/OurTeamCard";
export default function OurTeam() {
  return (
    <>
        <Head>
            <title>Our Team</title>
        </Head>
        <main className='pt-20'>
        <div className="relative w-full w-full">
            <div className="w-full grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 auto-cols-max border-none">
                <OurTeamCard name='Antonio Figueroa González' position='Main Developer' age='22 Years' 
                description='A high-level programmer with 7 years of experience in the professional field, being a scholar in network management and web application development,
                is the one who leads our team "Techno Blockchain Solutions" as its main founder and developer. This unique set of qualities unquestionably gives him the role of 
                leading projects within the organizationA high-level programmer with 7 years of experience in the professional field, being a scholar in network management and
                web application development, is the one who leads Techno Blockchain Solutions as its main founder and developer. This unique set of qualities unquestionably gives 
                him the role of leading projects within the organization' />
                <OurTeamCard name='Ami Evelyn Sáenz Banda' position='Administrative Manager' age='22 Years'
                description='In addition to her extensive knowledge in biology, chemistry, and other broad areas of science, this woman pushes the boundaries of her field of study 
                and supports the organization with her vast administrative knowledge, leading Techno Blockchain Solutions and managing the organization to achieve its goals.'/>
                <OurTeamCard name='Luis Mario Sandoval González' position='Web Designer' age='22 Years'
                description='A 22-year-old with a great passion for knowledge and learning. As a student, he is dedicating all his time and effort to expanding his knowledge and 
                skills in the areas of programming and web development, and has already demonstrated an exemplary attitude in his commitment to learning'/>
                <OurTeamCard name='Jose Ángel Flores Gutiérrez' position='Graphic Designer' age='21 Years'
                description='Mastering a vast range of design tools, this skilled programmer is knowledgeable in the field of marketing and creating advertising campaigns. 
                Their ability to create logos and promotional designs make them a valuable member of Techno Blockchain Solutions as the organizations marketing leader.'/>
                <OurTeamCard name='Ever Leonardo Chavira Vega' position='Component Designer' age='23 Years'
                description='A computer systems engineering student with an innate passion for technology. At just 23 years old, he has demonstrated his ability and 
                enthusiasm for learning new technologies and applying them in software projects, showing great potential for the programming world.'/>
                <OurTeamCard name='Daniel Omar Caraveo Falcon' position='Component Designer' age='23 Years'
                description='A 23-year-old with a strong desire to learn new technologies, eager to expand their horizons and develop different skills in various 
                technological fields, with a great attitude.'/>
            </div>
        </div>
        </main>
    </>
  )
}
import React from 'react'
import logoHTML from '../../public/imgs/html.webp'
import logoReact from '../../public/imgs/react.webp'
import logoPostgre from '../../public/imgs/postgre.webp'
import logoNodejs from '../../public/imgs/node.webp'
import logonetFramework from '../../public/imgs/net_framework.webp'
import logonetJava from '../../public/imgs/java.webp'
import logoCsharp from '../../public/imgs/csharp.svg';
import logoCss from '../../public/imgs/css-3.webp';
import logoJavaScript from '../../public/imgs/logo-javascript-icon-512.webp';
import logoSymfony from '../../public/imgs/symfony_white_03.webp';
import logoBoostrap from '../../public/imgs/boostrap-removebg-preview.webp';
import logoTailwind from '../../public/imgs/tailwindcss-mark.d52e9897.svg';
import logoHeroUI from '../../public/imgs/HeroUI.webp';
import logoApache from '../../public/imgs/Apache_NetBeans_Logo.svg';
import logoSprint from '../../public/imgs/spring-boot-1.svg';
import logoGit from '../../public/imgs/github-icon-2.svg';
import logoPhp from '../../public/imgs/php.webp';
import logoPython from '../../public/imgs/python.png';
import { Image } from "@heroui/image";

export const ItemSkill = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:space-between w-full'>
            <div className='lg:w-1/2 lg:h-3/4 bg-[#101010b5] rounded-lg shadow-lg p-4 border-[#252525] border-2 lg:mx-4 my-6'>
                <div><h3 className='text-white text-2xl font-bold'>FRONTEND</h3></div>
                <div className='content-skills text-white'>
                    <div className='card card-skill mx-4'>
                        <Image isBlurred src={logoReact} className='w-20 h-full hover:scale-100 transition img-skills-blues'></Image>
                        <strong className='text-white'>React Js</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoHTML} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>HTML</strong>
                    </div>
                    <div className='card card-skill p-2'>
                        <Image isBlurred src={logoCss} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>Css</strong>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 lg:h-full bg-[#101010b5] rounded-lg shadow-lg p-4 border-[#252525] border-2 lg:mx-4 my-6'>
                <div><h3 className='text-white text-2xl font-bold'>BACKEND</h3></div>
                <div className='content-skills text-white'>
                    <div className='card card-skill mx-4'>
                        <Image isBlurred src={logoJavaScript} className='w-20 h-full hover:scale-100 transition img-skills-blues'></Image>
                        <strong className='text-white'>JavaScript</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoPostgre} className='w-20 h-full hover:scale-100 transition img-skills'></Image>
                        <strong className='text-white'>PostgreSQL</strong>
                    </div>
                    
                    <div className='card card-skill'>
                        <Image isBlurred src={logoNodejs} className='w-20 h-full hover:scale-100 transition img-skills-node'></Image>
                        <strong className='text-white'>Node Js</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logonetJava} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>JAVA</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoCsharp} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>C#</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoPhp} className='w-24 h-full hover:scale-100 transition'></Image>
                        <strong className='text-white'>PhP</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoPython} className='w-24 h-full hover:scale-100 transition'></Image>
                        <strong className='text-white'>Python</strong>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 lg:h-3/4 bg-[#101010b5] rounded-lg shadow-lg p-4 border-[#252525] border-2 lg:mx-4 my-6'>
                <div><h3 className='text-white text-2xl font-bold uppercase'>Frameworks y Herramientas:</h3></div>
                <div className='content-skills text-white'>
                    <div className='card card-skill mx-4'>
                        <Image isBlurred src={logoBoostrap} className='w-20 h-full hover:scale-100 transition img-skills-blues'></Image>
                        <strong className='text-white'>Boostrap</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoTailwind} className='w-20 h-full hover:scale-100 transition img-skills'></Image>
                        <strong className='text-white'>Tailwind</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoHeroUI} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>HeroUI</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoNodejs} className='w-20 h-full hover:scale-100 transition img-skills-node'></Image>
                        <strong className='text-white'>Express.Js</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logonetFramework} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>.Net<pre></pre>Framework</strong>
                    </div>
                    <div className='card card-skill p-2'>
                        <Image isBlurred src={logoApache} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>NetBeans</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoGit} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>Github</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoSprint} className='w-20 h-full hover:scale-100 transition img-skills '></Image>
                        <strong className='text-white'>Sprint Boot</strong>
                    </div>
                    <div className='card card-skill'>
                        <Image isBlurred src={logoSymfony} className='w-24 h-full hover:scale-100 transition'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

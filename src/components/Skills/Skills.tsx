import Image from 'next/image'
import React from 'react'

export const Skills = () => {
  return (
    <section className='section-wrap'>
      <h1 className='section-title'>Skills</h1>
      <ul className='flex items-center space-x-1 sm:space-x-2 space-y-2 mt-3 flex-wrap [&>li]:w-9 sm:[&>li]:w-10 [&>li]:h-9 sm:[&>li]:h-10'>
        <li>
          <Image alt="C" width={42} height={42} src="/c.svg" />
        </li>
        <li>
          <Image alt="C++" width={42} height={42} src="/cpp.svg" />
        </li>
        <li>
          <Image alt="C#" width={42} height={42} src="/cSharp.svg" />
        </li>
        <li>
          <Image alt="Python" width={42} height={42} src="/python-original.svg" />
        </li>
        <li>
          <Image alt="Django" width={42} height={42} src="/django.png" />
        </li>
        <li>
          <Image alt="Javascript" width={42} height={42} src="/javascript.svg" />
        </li>
        <li>
          <Image alt="Problem Solving" width={42} height={42} src="/problemSolving.png" />
        </li>
        <li>
          <Image alt="HTML5" width={42} height={42} src="/html5.svg" />
        </li>
        <li>
          <Image alt="CSS" width={42} height={42} src="/css.svg" />
        </li>
        <li>
          <Image alt="SASS" width={42} height={42} src="/sass.svg" />
        </li>
        <li>
          <Image alt="Gulp" width={42} height={42} src="/gulp.svg" />
        </li>
        <li>
          <Image alt="React" width={42} height={42} src="/react-original.svg" />
        </li>
        <li>
          <Image alt="Redux" width={42} height={42} src="/redux.svg" />
        </li>
        <li>
          <Image alt="AngularJS" width={42} height={42} src="/angularjs.png" />
        </li>
        <li>
          <Image alt="Git" width={42} height={42} src="/git-original.svg" />
        </li>
        <li>
          <Image alt=".NetCore" width={42} height={42} src="/dotnetcore.svg" />
        </li>
        <li>
          <Image alt="PostgreSQL" width={42} height={42} src="/postgresql.svg" />
        </li>
        <li>
          <Image alt="Microsoft Visual Studio" width={42} height={42} src="/visualstudio.png" />
        </li>
        <li>
          <Image alt="JQuery" width={42} height={42} src="/jquery-original.svg" />
        </li>
        <li>
          <Image alt="Java" width={42} height={42} src="/java-original.svg" />
        </li>
        <li>
          <Image alt="JSON" width={42} height={42} src="/json.svg" />
        </li>
        <li>
          <Image alt="Unity" width={42} height={42} src="/unity3d.svg" />
        </li>
        <li>
          <Image alt="Android" width={42} height={42} src="/android.svg" />
        </li>
        <li>
          <Image alt="GitHub" width={42} height={42} src="/github.svg" />
        </li>
        <li>
          <Image alt="MySQL" width={42} height={42} src="/mysql.svg" />
        </li>
        <li>
          <Image alt="npm" width={42} height={42} src="/npm.svg" />
        </li>
        <li>
          <Image alt="PHP" width={42} height={42} src="/php.svg" />
        </li>
        <li>
          <Image alt="Flask" width={42} height={42} src="/flask.png" />
        </li>
      </ul>
    </section>
  )
}

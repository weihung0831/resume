import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPython from '@/images/logos/python.png'
import logoTensorflow from '@/images/logos/tensorflow.png'
import logojavascript from '@/images/logos/javascript.jpg'
import logoVue from '@/images/logos/vue.png'
import logoPHP from '@/images/logos/php.png'
import logoLaravel from '@/images/logos/laravel.png'
import logoDocker from '@/images/logos/docker.png'
import logoGit from '@/images/logos/git.webp'
import logoMySQL from '@/images/logos/mysql.png'


const projects = [
  {
    name: 'Python',
    link: { href: 'https://www.python.org/', label: 'python' },
    logo: logoPython,
  },
  {
    name: 'Tensorflow',
    link: { href: 'https://www.tensorflow.org/', label: 'tensorflow' },
    logo: logoTensorflow,
  },
  {
    name: 'Javascript',
    link: { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', label: 'javascript' },
    logo: logojavascript,
  },
  {
    name: 'Vue.js',
    link: { href: 'https://vuejs.org/', label: 'vue.js' },
    logo: logoVue,
  },
  {
    name: 'PHP',
    link: { href: 'https://www.php.net/', label: 'php' },
    logo: logoPHP,
  },
  {
    name: 'Laravel',
    link: { href: 'https://laravel.com/', label: 'laravel' },
    logo: logoLaravel,
  },
  {
    name: 'Docker',
    link: { href: 'https://www.docker.com/', label: 'docker' },
    logo: logoDocker,
  },
  {
    name: 'Git',
    link: { href: 'https://git-scm.com/', label: 'git' },
    logo: logoGit,
  },
  {
    name: 'MySQL',
    link: { href: 'https://www.mysql.com/', label: 'mySQL' },
    logo: logoMySQL,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: '專業技能',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="專業技能"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

import React from 'react'
type Props = {
  children: React.ReactNode;
  href?: string
};
export default function Breadcrumb ({ children, href }: Props) {
  if (href) {
    return <a href={href} className="text-gray-500 dark:text-gray-600 hover:underline">{children}</a>
  }

  return <span className="text-black dark:text-gray-300">{children}</span>
}

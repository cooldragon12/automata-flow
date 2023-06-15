
export const metadata = {
    title: 'About',
    description: 'About to the Team',
  }
  
  export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
      </>
    )
  }
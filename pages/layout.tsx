import Bottom from 'components/Bottom/page'

export default function Layout({ children }) {
  return (
    <>

      <main>{children}</main>
      <Bottom />
    </>
  )
}
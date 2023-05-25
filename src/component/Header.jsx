//to include header in desired page for title and sub title
export const Header = ({ title, subTitle }) => {
  return (
    <header className="mb-5">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="text-xl">{subTitle}</p>
    </header>
  )
}

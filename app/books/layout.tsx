import BookNav from "../components/BookNav"

type BookLayout = {
    children: React.ReactNode
}

export default function BookLayout({ children }: BookLayout) {
    return (
        <>
        <BookNav />
        {children}
        </>
    )
}
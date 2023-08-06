import Link from "next/link";

export const metadata = {
    title: 'Blog | Next Hero',
    description: 'Next Hero',
  }

const blogs = [
    {
        id: 1,
        year: 2023,
        title: "Title 1"
    },
    {
        id: 2,
        year: 2023,
        title: "Title 2"
    },
    {
        id: 3,
        year: 2023,
        title: "Title 3"
    },
    {
        id: 4,
        year: 2023,
        title: "Title 4"
    },
]

const BlogPage = () => {
    return (
        <div className="container mx-auto">
            <h1>Blog Page</h1>
            {
                blogs.map(({id, year, title}) => <Link className="block border border-blue-500 p-2 my-2" href={{
                    pathname: `/blogs/${year}/${id}`,
                    query: {
                        title: title
                    }
                }}
                 key={id}>{title}</Link>)
            }
        </div>
    );
};

export default BlogPage;
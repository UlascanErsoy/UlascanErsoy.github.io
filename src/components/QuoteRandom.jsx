
export default function RandomQuote({messages}){


    const [quote, author] = messages[(Math.floor(Math.random() * messages.length))];

    return (

        <blockquote>
            <em>
            "{quote}"
            <cite><p>—{author}</p></cite>
            </em>
        </blockquote>
    )
}


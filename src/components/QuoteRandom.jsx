
export default function RandomQuote({messages}){


    const [quote, author] = messages[(Math.floor(Math.random() * messages.length))];

    return (
        <blockquote>

            "{quote}"
            <cite><p>—{author}</p></cite>
        </blockquote>
    )
}


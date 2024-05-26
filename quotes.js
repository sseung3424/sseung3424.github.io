const quotes = [
    {
        quote: "Rather be dead than cool."
        ,author: "Kurt Cobain"
    },
    {
        quote: "Never do things others can do and will do if there are things others cannot do or will not do."
        ,author: "Amelia Earhart"
    },
    {
        quote: "Blaze with the fire that is never extinguished."
        ,author: "Luisa Sigea"
    }
    ];
    
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
const quotes = [
            "“Don’t quit. Suffer now, and suffer later.” - Anonymous",
            "Just because you dont give up doesn't mean you will make it. - Anonymous",
            "If at first you don't succeed, just quit - Anonymous",
            "When life gets hard, just sleep -Anonymous",   
            "Follow your dreams! Someone has to clean up after the people who actually succeed.",
            "If at first you don't succeed, maybe failure is your style. -Anonymous",
            "Hard work pays off in the future. Laziness pays off now. -Anonymous",
            "Dream big. That way the disappointment is extra satisfying. - Anonymous",
            
           ];

        let currentQuoteIndex = -1;

        function getRandomQuote() {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * quotes.length);
            } while (newIndex === currentQuoteIndex && quotes.length > 1);
            
            currentQuoteIndex = newIndex;
            return quotes[newIndex];
        }

        function generateQuote() {
            const quoteElement = document.getElementById('Quote');
            const btnElement = document.getElementById('btn');

            btnElement.classList.add('loading');
            btnElement.textContent = 'Generating...';
            quoteElement.classList.add('updating');

            setTimeout(() => {
                const newQuote = getRandomQuote();
                quoteElement.textContent = newQuote;

                quoteElement.classList.remove('updating');
                quoteElement.classList.add('updated');
                btnElement.classList.remove('loading');
                btnElement.textContent = 'Generate Quote';

                setTimeout(() => {
                    quoteElement.classList.remove('updated');
                }, 600);

            }, 1000);
        }

        document.getElementById('btn').addEventListener('click', generateQuote);

        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                generateQuote();
            }
        });
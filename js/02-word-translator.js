// The Word Translator

let langCode = prompt('Please enter your language code (es/de/en/fr): ')

if (langCode === 'es') {
    document.write('Hello World translated in Spanish is: Hola mundo')
} else if (langCode === 'de') {
    document.write('Hello World translated in German is: Hallo welt')
} else if (langCode === 'en') {
    document.write('Hello World in English is: Hello World')
} else if (langCode === 'fr') {
    document.write('Hello World translated in French is: Bonjour le monde')
} else {
    document.write('We do not have that language code.')
}

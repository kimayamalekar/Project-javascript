document.addEventListener('DOMContentLoaded', function() {
    var languages = document.getElementById('languages');
    var output = document.getElementById('output');

    languages.addEventListener('change', function() {
        var language = this.value;
        var greeting;
        
        switch(language) {
            case 'en':
                greeting = 'Hello!';
                break;
            case 'es':
                greeting = '¡Hola!';
                break;
            case 'fr':
                greeting = 'Bonjour!';
                break;
            case 'de':
                greeting = 'Hallo!';
                break;
            case 'it':
                greeting = 'Ciao!';
                break;
            case 'jp':
                greeting = 'こんにちは!';
                break;
            default:
                greeting = '';
        }
        
        output.textContent = greeting;
    });
});

export function formatText(text: string) {
    // Ajouter un saut de ligne après chaque point
    text = text.replace(/\./g, '.<br><br>');

    // Ajouter des balises p pour chaque paragraphe
    text = text.replace(/(.+?)\n\n/g, '<p>$1</p>');

    return text;
}
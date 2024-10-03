let grade = parseInt(prompt('Enter the student\'s grade: '))
if (grade >= 90) {
    document.write('You recieved an A')
} else if (grade >= 80) {
    document.write('You received an B')
} else if (grade >= 70) {
    document.write('You recieved an C')
} else if (grade >= 60) {
    document.write('You recieved an D')
}
else {
    document.write('You recieved an F')
}
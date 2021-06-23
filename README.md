# Haiku-MIxed-Generator
 Its Japaneese SHort Poem which we are going to store and print randomly the poem and its english translation.

 ## Pseudo Code 

 1. Create an array of haikus.
 2. Create an empty array of size of totalNumber of lines in all the haikus.
 3. Create an empty array to maintain random number log
 4. Write random number generating function
 5. Run loop on array of haikus
 6. Pick each haikus and sperate the lines by ",".
 7. call random number function then check that number exists in the log or not
 8. if it exists then recall the function.
 9. else use the random number as index to allocate the line to corresponding index in the array
 10. The final array(size = totalNumber of lines) will contain lines of haikus randomly seperated.

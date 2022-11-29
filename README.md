# Password Generator Application

## Description
For this project, I had to create a JavaScript application to generate a password based on what the user selectes. The page contains a simple box with a field which will generate the random password and a button. As soon as the user clicks on generate password, a number of prompts will appear to ask the user of the password preference. These preferences can be set according to the lenght of the password and also the different types of characters that a password may contain.

URL of the live project: https://alexanderblk.github.io/password-generator/

# Challenges

At the beginning I found it fairly easy as I have made a pseudocode in my head and already had some stepts to start with. However, I realised that later on, the struggle was real. My main challenges and ideas were as follows:

1. I had an idea that I have to create a conditional for the user to input the desired length of the password and I got this to work from the first try.

2. I have struggled a bit when it came to password choices, whether to contain Uppercase letters, symbols or numbers. I have done a lot of reseach to see how other people have done it. And I realised that I will have to create a very big condition which contained mainly else ifs.

3. I was quite happy because half of the assignment was done and working properly. I could get the user to input the length of the password. If the password wasn't between 10 and 64 chars then the user will get an error and it will start again. Then, once he's chosen the lenght, he will get various prompts to choose what types should the password contain, based on the condition that he needs to choose at least one.

4. Once this was done, I was struggling with generating the random password based on user input. So far, I could get the variables to concatenate, for example: if the user has chosen lowercase and uppercase this will generate: abc...xyzABC...XYZ. I knew that I will have to use a for loop and a math.random but I didn't know how to write it. I think the many functions confused me.

5. After a lot of research done, I came to the conclusion that I do not need that many functions and my code could become simpler, mainly getting rid of the big condition that I have made for the user choices.

# The Journey

The below screenshots are from my final code after many tries

1. I have first written the function to store the user choices

2. Then I have created a condition and a for loop to generate the password based on user choices

3. And lastly, once the password was generated, I had to create another function that will write the password on the page

4. And the final project with a password generated.


# Things I learned

I have learned how to use the prompts and confirm in a real projects.

I have learned how a function works.

I have learned how to work better with objects inside a function.

I have also learned how to implement the DOM for my page.

# Contact

If you have any questions, please contact me at:

Github Profile: [GitHub](https://github.com/alexanderblk)
Email: email@gmail.com
LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/alexandru-dumitru-a02719188/)

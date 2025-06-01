def writeToOutputFile():
    # Read the current count
    try:
        with open("count.txt", "r") as file:
            content = file.readline()
            mycount = int(content.strip())
    except FileNotFoundError:
        mycount = 0  # If file doesn't exist, start at 0

    # Increment and write back
    with open("count.txt", "w") as file:
        file.write(str(mycount + 1))
#import libraries
import sys
import datetime

userinput = ""
print("Welcome to the Automatic Infirmary System !")

while userinput.lower() != "exit":
    #User inputs
    userinput = input("1)Add\n2)Read\n3)About us\n")
    if userinput == "1":
        #Medical inputs
        name = input("Name: ")
        medicname = input("Medic Name: ")
        medictime = input("Medic Time: ")
        notes = input("Notes: ")

        if name != "" and medicname != "" and medictime != "" and notes != "":
            try:
                fileName = 'demo.csv'
                APPEND = 'a'
                READ = 'r'
                #writing in the csv file
                with open(fileName, mode=APPEND) as file:

                    with open(fileName, mode=READ) as myDataFile:
                        firstline = myDataFile.readline()

                    if firstline == "Name:,Medic Name:,Medic Time:,Note:\n":
                        file.write(f"\n{name},{medicname},{medictime},{notes}")
                        file.close()
                        myDataFile.close()
                    else:
                        file.write(f"Name:,Medic Name:,Medic Time:,Note:\n{name},{medicname},{medictime},{notes}")
                        file.close()
                        myDataFile.close()
            except:
                fullerror = sys.exc_info()[0]
                print(f"I found an error!\nReport it as: {fullerror}")
        else: #if the input is empty !
            print("Please Type Something, nothing saved in the file!")


    #reading the history
    elif userinput == "2":
        filename = "demo.csv"
        READ = "r"
        try:
            with open(filename, mode=READ) as myDataFile:
                allcontent = myDataFile.read()
            print(allcontent)
            myDataFile.close()
        except FileNotFoundError:
            print("Well, seems i can not find the file!")
        except:
            fullerror = sys.exc_info()[0]
            print(f"I found an error!\nReport it as: {fullerror}")
    #just for fun ;°)
    elif userinput == "3": #Copyright
        print(
            f"Created By: CH4LL3NG3R5, {datetime.datetime.today().year}\nLicensed under GNU GPL v3 (or higher) <https://www.gnu.org/licenses/gpl-3.0.en.html>")


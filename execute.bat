@echo off
start cmd /k call bath/runServer.bat 4444
call bath/runTest.bat > test_result/result.txt
exit
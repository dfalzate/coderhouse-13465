1. crear usuario
curl -X GET "http://localhost:3000/newUser?userName=Coderhouse&password=123456"
2. Artillery bloqueante
artillery quick --count 10 -n 50 "http://localhost:3000/auth-bloq?userName=Coderhouse&password=123456" > resultados_bloq.txt
3. Artillery no bloqueante
artillery quick --count 10 -n 50 "http://localhost:3000/auth-nobloq?userName=Coderhouse&password=123456" > resultados_nobloq.txt
4. procesar
node --prof-process bloq.log > bloq.txt
node --prof-process nobloq.log > nobloq.txt


5. Inspect
node --inspect server.js
abrir chrome
artillery quick --count 10 -n 50 "http://localhost:3000/auth-bloq?userName=Coderhouse&password=123456"
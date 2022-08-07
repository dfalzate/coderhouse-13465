<!-- ------------------------------- ADONIS -------------------------------- -->
npm i -g @adonisjs/cli
adonis
adonis new myApp
cd myApp
adonis serve --dev
adonis make:model Cupcake --migration
Run mysql

.env 
{
  DB_CONNECTION=mysql
}

npm i mysql
adonis migration:run
adonis migration:status

crear cupcakes en DB

resource/views cupcake.edge

adonis make:controller Cupcake
pasar código a la carpeta controllers

documentacion adonisjs.com


<!-- -------------------------------- NEST --------------------------------- -->

npm i -g @nestjs/cli
nest new appNest
npm start

nest generate module cats
nest generate controller cats
nest generate service cats

nest generate interface interfaces/cats

mkdir src/dto && touch src/dto/create-cats.dto.ts

npm i @nestjs/swagger swagger-ui-express


<!-- -------------------------------- SAILS -------------------------------- -->
npm i -g sails 
sails new appSails

sails lift

sails generate api book
sails lift
option 1 

/config/models => migrate:"alter" 
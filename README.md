My task with ionic with capacitor
========

App with ionic capacitor for task.


Comandos para inicializar el proyecto:
-------------------------------------

~~~sh
ionic start my-tasks --type=angular --capacitor
~~~

Ejecutar aplicación en el navegador web:
--------------------------

~~~sh
ionic serve
~~~

Construir aplicación:
--------------------

~~~sh
ionic build
~~~

Agregar plataformas
-----------------

~~~sh
ionic cap add ios

ionic cap add android
~~~


ionic capacitor run android -- copia y ejecuta en el celular

live reload:
------

~~~sh
ionic cap run android -l --external
~~~

Helpers:
----

~~~sh
export CAPACITOR_ANDROID_STUDIO_PATH="/home/lucas/android-studio/bin"
~~~


~~~sh
ionic generate component components/header --dry-run
~~~


Para generar sha1 y auto firmar la aplicación:
--------

~~~sh
keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
~~~

Copiar archivo json a proyecto android:
----

carpeta destino: android/app/google-services.json

En archivo:
-------

~~~sh
/home/lucas/www/ionic/my-tasks/android/app/src/main/res/values/strings.xml
~~~

Agregar server_client_id:

~~~html
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">my-tasks</string>
    <string name="title_activity_main">my-tasks</string>
    <string name="package_name">io.ionic.starter</string>
    <string name="custom_url_scheme">io.ionic.starter</string>
    <string name="server_client_id">####.apps.googleusercontent.com</string>
</resources>

~~~



En archivo: /home/lucas/www/ionic/my-tasks/android/app/src/main/java/io/ionic/starter/MainActivity.java
------

~~~java
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth; // no se si es necesario
~~~

Configurar archivo capacitor.config.json con client id.
----------------------------------------

Configurar archivo index.html con meta etiqueta:
----------------------------------------
~~~html
  <meta name="google-signin-client_id" content="####.apps.googleusercontent.com" />
~~~
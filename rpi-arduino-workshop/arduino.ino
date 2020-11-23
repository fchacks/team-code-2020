int sensorPin = A0; // select the input pin for LDR(s)
int sensorValue = 0;
int led = 13;

void setup() {
    Serial.begin(9600); //sets serial port for communication
    pinMode(LED_BUILTIN, OUTPUT);
    pinMode(led, OUTPUT);
}

void loop() {
    // Photoresistor
    sensorValue = analogRead(sensorPin); 
    Serial.println(sensorValue);

    // LED blinking
    digitalWrite(led, LOW); // Turn the LED on
    delay(50);
    digitalWrite(led, HIGH); // Turn the LED on
    delay(50);
}

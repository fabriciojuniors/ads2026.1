import { Accelerometer, Gyroscope } from 'expo-sensors';
import { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

const LIMITE = 1.8;
const INTERVALO_MINIMO_MS = 1000;

type Eixos = { x: number; y: number; z: number };

const EXERCISES = [
    '10 Flexões',
    '20 Agachamentos',
    '30s Prancha',
    '15 Burpees',
    '1 min Polichinelo',
];

export default function Sensors() {
    const [accel, setAccel] = useState<Eixos>({ x: 0, y: 0, z: 0 });
    const [gyro, setGyro] = useState<Eixos>({ x: 0, y: 0, z: 0 });
    const [shakeCount, setShakeCount] = useState(0);
    const [lastShakeAt, setLastShakeAt] = useState(0);

    const shakeCountRef = useRef(0);

    useEffect(() => {
        Accelerometer.setUpdateInterval(100);
        Gyroscope.setUpdateInterval(100);

        const accelSub = Accelerometer.addListener((data) => {
            setAccel(data);

            const magnitude = Math.sqrt(data.x ** 2 + data.y ** 2 + data.z ** 2);
            const now = Date.now();

            if (magnitude > LIMITE && now - lastShakeAt > INTERVALO_MINIMO_MS) {
                shakeCountRef.current += 1;
                setShakeCount(shakeCountRef.current);
                setLastShakeAt(now);
                const exercise = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];
                Alert.alert('Exercício sorteado!', exercise);
            }
        });

        const gyroSub = Gyroscope.addListener(setGyro);

        return () => {
            accelSub.remove();
            gyroSub.remove();
        };
    }, [lastShakeAt]);

    return (
        <View style={styles.container}>
            <Text style={styles.hint}>Agite o celular para sortear um exercício!</Text>
            <Text style={styles.counter}>Shakes: {shakeCount}</Text>

            <Text style={styles.sectionTitle}>Acelerômetro (m/s²)</Text>
            <Text>X: {accel.x.toFixed(4)}</Text>
            <Text>Y: {accel.y.toFixed(4)}</Text>
            <Text>Z: {accel.z.toFixed(4)}</Text>

            <Text style={styles.sectionTitle}>Giroscópio (rad/s)</Text>
            <Text>X: {gyro.x.toFixed(4)}</Text>
            <Text>Y: {gyro.y.toFixed(4)}</Text>
            <Text>Z: {gyro.z.toFixed(4)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 20,
        gap: 4,
    },
    hint: {
        textAlign: 'center',
        marginBottom: 8,
    },
    counter: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 4,
    },
});

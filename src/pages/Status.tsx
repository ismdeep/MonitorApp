import React from 'react';
import {
    IonContent,
    IonCard,
    IonText,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Status.css';

const Status: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Status</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonCard>
                    <IonCardContent>
                        <p>blog-subscriber.ismdeep.com</p>
                        <p>Status: <IonText color="success">Alive (25 mins ago)</IonText></p>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>
                        <p>blog-subscriber.cybart.ist</p>
                        <p>Status: <IonText color="success">Alive (25 mins ago)</IonText></p>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>
                        <p>blog-subscriber.www.yinwang.org</p>
                        <p>Status: <IonText color="success">Alive (25 mins ago)</IonText></p>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Status;

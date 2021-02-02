import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonCard,
    IonText,
    IonCardContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Status.css';

const Status: React.FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://monitor.ismdeep.com/api/statuses?token=bbacfa66-b646-4b7c-8192-be150203eb99")
            .then(res => res.json())
            .then(result => result["status_list"])
            .then((items) => {
                console.log(items);
                setItems(items);
            });
    }, [])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Status</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    items.map(item => (
                        <IonCard key={item["key"]}>
                            <IonCardContent>
                                <p>{item["key"]}</p>
                                {item["is_alive"] &&
                                <p>Status: <IonText color="success">Alive ({item["ago_text"]})</IonText></p>
                                }
                                {!item["is_alive"] &&
                                <p>Status: <IonText color="danger">Down ({item["ago_text"]})</IonText></p>
                                }
                            </IonCardContent>
                        </IonCard>
                    ))
                }

            </IonContent>
        </IonPage>
    );
};

export default Status;

import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonCard,
    IonText,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonLabel,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLoading,
    IonRefresher,
    IonRefresherContent
} from '@ionic/react';
import './Status.css';
import { RefresherEventDetail } from '@ionic/core';


const Status: React.FC = () => {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        console.log("Hello");
        event.detail.complete();
        setItems([]);
        setLoaded(false);
    }


    // useEffect(() => {
    //
    // }, [])

    if (items.length <= 0) {
        fetch("https://monitor.ismdeep.com/api/statuses?token=bbacfa66-b646-4b7c-8192-be150203eb99")
            .then(res => res.json())
            .then(result => result["status_list"])
            .then((items) => {
                console.log(items);
                setItems(items);
                setLoaded(true);
            });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Status</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                {!loaded &&
                <IonCard>
                    <IonCardContent>
                        <IonText>Loading...</IonText>
                    </IonCardContent>
                </IonCard>
                }

                {loaded &&
                items.map(item => (
                    <IonCard key={item["key"]}>
                        <IonCardContent>
                            <IonLabel color="dark">{item["key"]}</IonLabel>
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

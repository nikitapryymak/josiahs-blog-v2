// import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ReviewCard from '../components/ReviewCard';
import db from '../firebase';
import './Home.css'
let lastDoc = 'fake doc';

export default function Home() {

    const [reviews, setReviews] = useState(null);
    const [atEnd, setAtEnd] = useState(false);
    
    async function loadMore() {
        const nextSnap = await db.collection('reviews').orderBy('timestamp', 'desc')
        .startAfter(lastDoc).limit(9).get();
        if (nextSnap.empty) return setAtEnd(true);
        lastDoc = nextSnap.docs[nextSnap.docs.length - 1];
        const newData = nextSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(prev => [...prev, ...newData]);
        if (nextSnap.docs.length < 9) return setAtEnd(true);
    }

    useEffect(() => {
        async function fetchReviews() {
            const snap = await db.collection('reviews').orderBy('timestamp', 'desc').limit(9).get();
            setReviews(snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
            lastDoc = snap.docs[snap.docs.length - 1];
            if (snap.docs.length < 9) setAtEnd(true);
        }
        fetchReviews();
    }, []);

    return (
        <div className='Home'>

            <Typography variant='h3' color='secondary' style={{ marginBottom: '2rem' }}>
                "Equipping the saints for practical and godly living"</Typography>
            <Typography variant='h1' color='error'>
                Book Reviews</Typography>
            <div className="reviews-container">

                { reviews?.map(review => <ReviewCard review={review} key={review.id} />) }
                
            </div>
            { !atEnd && <Typography 
                onClick={loadMore} 
                style={{ cursor: 'pointer' }}
                variant='body1' 
                color='error'>
            Load More</Typography> }
        </div>
    );
}
import React from 'react';

import GamePreview from '../Game/GamePreview/GamePreview';

const HomeView = () => (

    <section className="GamePreviews">
        <h2>
            Game Previews
        </h2>
        <ul>
            <GamePreview title="Dallas vs. Steelers" date="1 de septiembre"/>

            <GamePreview title="Broncos vs. Steelers" date="12 de septiembre"/>

            <GamePreview title="Diablos vs. Steelers" date="31 de septiembre"/>

            <GamePreview title="Pumas vs. Patriots" date="11 de septiembre"/>
            
        </ul>

    </section>

)

export default HomeView;
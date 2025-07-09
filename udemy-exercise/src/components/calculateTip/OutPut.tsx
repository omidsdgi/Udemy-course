import React from 'react';

export function OutPut({bill,tip}) {
    return (
        <h3>You pay ${bill+tip} (${bill}+ ${tip})tip)</h3>
    );
}


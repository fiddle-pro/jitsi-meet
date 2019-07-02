// @flow

import { StateListenerRegistry } from '../base/redux';
import VideoLayout from '../../../modules/UI/videolayout/VideoLayout';

/**
 * For auto-pin mode, listen for changes to the known media tracks and look
 * for updates to screen shares.
 */
StateListenerRegistry.register(
    /* selector */ state => state['features/large-video'].participantId,
    /* listener */ participantId => {
        VideoLayout.updateLargeVideo(participantId, true);
    }
);

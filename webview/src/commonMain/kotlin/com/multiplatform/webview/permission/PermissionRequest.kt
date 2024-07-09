package com.multiplatform.webview.permission

/**
 * This data class represents a permission request.
 * It contains the origin of the request and the list of permissions requested.
 */
data class PermissionRequest(
    val origin: String,
    val permissions: List<Permission>
) {
    enum class Permission {
        /**
         * Request for mic
         */
        AUDIO,

        /**
         * Request for MIDI access(only Android)
         */
        MIDI,

        /**
         * Request for media access(only Android)
         */
        MEDIA,

        /**
         * Request for camera access
         */
        VIDEO,

        LOCATION
    }
}


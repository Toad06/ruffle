// The initial version of this file was autogenerated from the official AS3 reference at 
// https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/AVHTTPStatusEvent.html
// by https://github.com/golfinq/ActionScript_Event_Builder
// It won't be regenerated in the future, so feel free to edit and/or fix
package flash.events
{
    
    public class AVHTTPStatusEvent extends Event
    {
        public static const AV_HTTP_RESPONSE_STATUS:String = "avHttpResponseStatus"; // Unlike the httpStatus event, the httpResponseStatus event is delivered before any response data.

        private var _status: int; // The HTTP status code returned by the server.
        private var _responseURL: String; // The URL that the response was returned from.
        private var _responseHeaders: Array; // The response headers that the response returned, as an array of URLRequestHeader objects.

        public function AVHTTPStatusEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false, status:int = 0, responseUrl:String = null, responseHeaders:Array = null)
        {
            super(type,bubbles,cancelable);
            this._status = status;
            this.responseURL = responseUrl;
            this.responseHeaders = responseHeaders;
        }
        

        //  Creates a copy of the AVHTTPStatusEvent object and sets the value of each property to match that of the original.
        override public function clone():Event
        {
            return new AVHTTPStatusEvent(this.type, this.bubbles, this.cancelable, this.status, this.responseURL, this.responseHeaders);
        }

        //  Returns a string that contains all the properties of the AVHTTPStatusEvent object.
        override public function toString():String
        {
            return this.formatToString("AVHTTPStatusEvent","type","bubbles","cancelable","eventPhase","status","responseUrl","responseHeaders");
        }

        public function get status():int {
            return this._status;
        }

        public function get responseURL():String {
            return this._responseURL;
        }
        public function set responseURL(value:String):void {
            this._responseURL = value;
        }

        public function get responseHeaders():Array {
            return this._responseHeaders;
        }
        public function set responseHeaders(value:Array):void {
            this._responseHeaders = value;
        }
    }
}


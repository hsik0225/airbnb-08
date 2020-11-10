package com.codesquad.airbnb.common.exception;

public class AlreadyReservedException extends RuntimeException{

    public AlreadyReservedException(String message) {
        super(message);
    }
}

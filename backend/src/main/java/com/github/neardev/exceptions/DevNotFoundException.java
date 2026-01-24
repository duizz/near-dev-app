package com.github.neardev.exceptions;

public class DevNotFoundException extends RuntimeException {
    public DevNotFoundException() {
        super("Dev not found");
    }
}

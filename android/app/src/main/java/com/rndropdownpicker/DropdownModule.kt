package com.rndropdownpicker

import android.app.AlertDialog
import android.content.DialogInterface
import com.facebook.react.bridge.*

class DropdownModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "DropdownModule"
    }

    @ReactMethod
    fun showDropdown(title: String, options: ReadableArray, multiSelect: Boolean, callback: Callback) {
        val optionsList = mutableListOf<String>()
        for (i in 0 until options.size()) {
            optionsList.add(options.getString(i) ?: "")
        }
        val checkedItems = BooleanArray(optionsList.size)
        val selectedItems = mutableListOf<String>()

        val builder = AlertDialog.Builder(currentActivity!!)
        builder.setTitle(title)

        if (multiSelect) {
            builder.setMultiChoiceItems(optionsList.toTypedArray(), checkedItems) { _, index, isChecked ->
                if (isChecked) {
                    selectedItems.add(optionsList[index])
                } else {
                    selectedItems.remove(optionsList[index])
                }
            }

            builder.setPositiveButton("OK") { _, _ ->
                callback.invoke(Arguments.fromArray(selectedItems.toTypedArray()))
            }
        } else {
            builder.setItems(optionsList.toTypedArray()) { _, which ->
                callback.invoke(optionsList[which])
            }
        }

        builder.show()
    }
}

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

export namespace Commands {
    export const DataScience = 'python.datascience';
    export const RunCell = 'python.datascience.runcell';
}

export namespace RegExpValues {
    export const PythonCellMarker = new RegExp('^(#\\s*%%|#\\s*\\<codecell\\>|#\\s*In\\[\\d*?\\]|#\\s*In\\[ \\])(.*)');
}

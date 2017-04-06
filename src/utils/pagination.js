/**
 * MIT License
 *
 * Copyright (c) 2017 Skin Moderne Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { findIndex } from 'lodash';

const prefix = 'page-';

export function createPaginationLink(page, lastPage, path, container) {
    if (page - 1 > 0) {
        const
            index = path.indexOf('page='),
            newPath = getNewPath(path, index, page - 1),
            id = prefix + (page - 1),
            element = `<link id='${id}' rel='prev' href=${newPath}>`,
            item = {
                id,
                element
            };

        findIndex(container, { id: item.id }) === -1 && container.push(item);
    }
    if (page + 1 <= lastPage) {
        const
            index = path.indexOf('page='),
            newPath = getNewPath(path, index, page + 1),
            id = prefix + (page + 1),
            element = `<link id='${id}' rel='next' href=${newPath}>`,
            item = {
                id,
                element
            };

        findIndex(container, { id: item.id }) === -1 && container.push(item);
    }
}


function getNewPath(path, index, page) {
    if (index !== -1) {
        return `${path.substr(0, index + 5)}${page}${path.substr(index + 7)}`;
    } else {
        return path.indexOf('?') === -1 ? `${path}?page=${page}` : `${path}&page=${page}`;
    }
}

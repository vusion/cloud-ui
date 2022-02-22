``` html
<div>
    <u-pagination style="margin-bottom:16px;" :total="11" :page="6"></u-pagination>
    <u-pagination style="margin-bottom:16px;" :total="11">
        <a slot="prev" role="text">Previous</a>
        <a slot="next" role="text">Next</a>
    </u-pagination>
    <u-pagination
        style="margin-bottom:16px;"
        :total-items="75"
        show-total>
    </u-pagination>
    <u-pagination
        style="margin-bottom:16px;"
        :total-items="75"
        show-total
        show-sizer
        show-jumper>
    </u-pagination>
    <u-pagination
        style="margin-bottom:16px;"
        :total="11"
        simple
        readonly>
    </u-pagination>
    <u-pagination
        :total="11"
        simple
        disabled>
    </u-pagination>
</div>
```
jQuery(document).ready(function () {
    // Script for about tdrd page
    jQuery('.tdrd_theme_plugin li a').click(function (e) {
        e.preventDefault();
        jQuery('.tdrd_theme_plugin li').removeClass('active');
        var $name = jQuery(this).attr('data-toggle');
        jQuery(this).parent('li').addClass('active');
        jQuery('.tdrd-out-other-work .tdrd-info-content > div').hide();
        jQuery('#' + $name).show();
    });
    jQuery('#chk_remove_all, #chk_remove_all2').click(function () {
        
        
        if (this.checked) {
            jQuery('#chk_remove_all2').attr('checked', true);
            jQuery('#chk_remove_all').attr('checked', true);
            jQuery('.chk_box').each(function () {
                this.checked = true;
            });
        } else {
            jQuery('#chk_remove_all2').attr('checked', false);
            jQuery('#chk_remove_all').attr('checked', false);
            jQuery('.chk_box').each(function () {
                this.checked = false;
            });
        }
    });

    jQuery(".chk_box").change(function () {
        var a = jQuery(".chk_box");
        if (a.length != a.filter(":checked").length) {
            jQuery('#chk_remove_all').attr('checked', false);
            jQuery('#chk_remove_all2').attr('checked', false);
        } else {
            jQuery('#chk_remove_all').attr('checked', true);
            jQuery('#chk_remove_all2').attr('checked', true);
            alert(tdrc_obj.selected_all_posts);
        }
    });

    jQuery('.chk_box').click(function () {
        var rowid = jQuery(this).parents('.tdrd_post_group').data('rowid');
        var hidden_post = jQuery('#trash_group_ind_' + rowid).find('.select_posts_hidden');
        if (jQuery(this).is(':checked')) {
            hidden_post.val(hidden_post.val() + ',' + jQuery(this).val());
        } else {
            hidden_post.val(hidden_post.val().replace(',' + jQuery(this).val(), ''));
        }
    });

    jQuery('#delete-all-duplicate , #chk_remove_all').click(function () {
        var trashallchk = jQuery(this);
        jQuery('.tdrd_post_group').each(function () {
            var rowid = jQuery(this).data('rowid');
            var chk = jQuery(this).find('.chk_box');
            var hidden_post = jQuery('#trash_group_ind_' + rowid).find('.select_posts_hidden');
            if (trashallchk.is(':checked')) {
                hidden_post.val(hidden_post.val() + ',' + chk.val());
            } else {
                hidden_post.val(hidden_post.val().replace(',' + chk.val(), ''));
            }
        });
    });
    jQuery('#delete-all-duplicate').on('change', function () {
        if (this.checked) {
            jQuery('#chk_remove_all2').attr('checked', true);
            jQuery('#chk_remove_all').attr('checked', true);
            var deleteallduplicate = confirm(tdrc_obj.selected_all_posts);
            if(deleteallduplicate == true) {
                jQuery('#chk_remove_all2').attr('checked', true);
                jQuery('#chk_remove_all').attr('checked', true);
                jQuery('.chk_box').each(function () {
                    this.checked = true;
                });
            }
            else
            {
                jQuery('#chk_remove_all2').attr('checked', false);
                jQuery('#chk_remove_all').attr('checked', false);
                jQuery('#delete-all-duplicate').prop('checked', false);
                jQuery('.chk_box').each(function () {
                    this.checked = false;
                });
            }
        } else {
            jQuery('#chk_remove_all2').attr('checked', false);
            jQuery('#chk_remove_all').attr('checked', false);
            jQuery('.chk_box').each(function () {
                this.checked = false;
            });
        }
    });

    jQuery(".trash_post_expand").on('click', function (e) {
        if (e.target.nodeName == 'LABEL' || e.target.nodeName == 'INPUT')
            return;
        var src = jQuery(this).find('img').attr('src');
        if (src.search("down.png") != -1) {
            var newsrc = src.replace("down.png", "up.png");
            jQuery(this).find('img').attr('src', newsrc);
        } else {
            var newsrc = src.replace("up.png", "down.png");
            jQuery(this).find('img').attr('src', newsrc);
        }
        var val = jQuery(this).attr('id');
        var get_id_arr = val.split('_');
        var get_id = get_id_arr[3];
        jQuery('tr[class^="trash_ind_group_' + get_id + '"]').stop().slideToggle(500);
    });

    jQuery('#chk_del_all').click(function () {
        if (this.checked) {
            jQuery('.chkbox').each(function () {
                this.checked = true;
            });
        } else {
            jQuery('.chkbox').each(function () {
                this.checked = false;
            });
        }
    });
    jQuery('#chk_del_all_2').click(function () {
        if (this.checked) {
            jQuery('.chkbox').each(function () {
                this.checked = true;
            });
        } else {
            jQuery('.chkbox').each(function () {
                this.checked = false;
            });
        }
    });
    jQuery(".chkbox").change(function () {
        var a = jQuery(".chkbox");
        if (a.length != a.filter(":checked").length) {
            jQuery('#chk_del_all').attr('checked', false);
        } else {
            jQuery('#chk_del_all').attr('checked', true);
        }
    });
    jQuery(".chkbox").change(function () {
        var a = jQuery(".chkbox");
        if (a.length != a.filter(":checked").length) {
            jQuery('#chk_del_all_2').attr('checked', false);
        } else {
            jQuery('#chk_del_all_2').attr('checked', true);
        }
    });
});
jQuery(document).ready(function() {
    jQuery('.chk_box').on('change', function () {
   var allChecked = jQuery('.chk_box').length === jQuery('.chk_box:checked').length;
   jQuery('#chk_remove_all').prop('checked', allChecked);
          jQuery('#chk_remove_all2').prop('checked', allChecked);
      });
     jQuery('#chk_remove_all2').on('change', function () {
          jQuery('#chk_remove_all').prop('checked', jQuery(this).is(':checked'));
      });
      jQuery('#chk_remove_all').on('change', function () {
          jQuery('#chk_remove_all2').prop('checked', jQuery(this).is(':checked'));
      });
      jQuery('#chk_del_all').on('change',function() {
        jQuery('#chk_del_all_2').prop('checked', jQuery(this).is(':checked'));
    });
      jQuery('#chk_del_all_2').on('change',function() {
        jQuery('#chk_del_all').prop('checked', jQuery(this).is(':checked'));
    });
});
   jQuery(document).ready(function() {
    jQuery('.chkbox').change(function() {          
 if(jQuery('.chkbox').length === jQuery('.chkbox:checked').length)
    {jQuery('#chk_del_all_2').prop('checked', true);
    jQuery('#chk_del_all').prop('checked', true);
    alert(tdrc_obj.selected_all_posts);}
    else
    {
    jQuery('#chk_del_all_2').prop('checked', false);
    jQuery('#chk_del_all').prop('checked', false);
    }
    });
 });
 jQuery(document).ready(function() {
 jQuery('div.sol-action-options .duplicates-action-top').change(function() {
               
    jQuery('.tablenav select[name="duplicates-action-top2"]').val(jQuery(this).val());
}); 
    jQuery('.tablenav select[name="duplicates-action-top2"]').change(function() {
               
    jQuery('div.sol-action-options .duplicates-action-top').val(jQuery(this).val());
}); 
});
